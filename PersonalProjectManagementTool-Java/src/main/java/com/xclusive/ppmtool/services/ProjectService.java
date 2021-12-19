package com.xclusive.ppmtool.services;

import com.xclusive.ppmtool.domain.Backlog;
import com.xclusive.ppmtool.domain.Project;
import com.xclusive.ppmtool.domain.User;
import com.xclusive.ppmtool.exceptions.ProjectIdException;
import com.xclusive.ppmtool.exceptions.ProjectNotFoundException;
import com.xclusive.ppmtool.repositories.BacklogRepository;
import com.xclusive.ppmtool.repositories.ProjectRepository;
import com.xclusive.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    // helper function: converts a string to upper case
    public String changeStringCase (String s){
        return s.toUpperCase();
    }

    public Project saveOrUpdateProject(Project project, String username){
        project.setProjectIdentifier(this.changeStringCase(project.getProjectIdentifier()));

        try {
            /* only create a new backlog when saving new project.
             * backlog shouldn't be created when updating a project
             */
            if (project.getId() == null) {
                User user = userRepository.findByUsername(username);
                project.setUser(user);
                project.setProjectLeader(user.getUsername());

                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier());
            }

            // for a project that already exists, it has an owner
            if (project.getId() != null){
                Project existingProject = findProjectByIdentifier(project.getProjectIdentifier(), username);
                if (!existingProject.getId().equals(project.getId())) {
                    throw new ProjectIdException("The primary key id you provided is invalid for the Project Identifier");
                }
                project.setUser(existingProject.getUser());
                project.setProjectLeader(existingProject.getProjectLeader());
                project.setBacklog(existingProject.getBacklog());
            }

            return projectRepository.save(project);
        }catch (ProjectIdException | ProjectNotFoundException e) {
            throw e;
        }catch (Exception e) {
            throw new ProjectIdException("Project ID '"+ project.getProjectIdentifier() +"' already exist");
        }
    }


    public Project findProjectByIdentifier(String projectId, String username) {
        projectId = this.changeStringCase(projectId);

        Project project = projectRepository.findByProjectIdentifier(projectId);

        if (project == null) {
            throw new ProjectIdException("Project ID '"+ projectId +"' does not exist");
        }

        // Only return the project if the user looking for it is the owner
        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project not found in your account");
        }

        return project;
    }

    public Iterable<Project> findAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectId, String username) {

        projectRepository.delete(findProjectByIdentifier(projectId, username));
    }
}
