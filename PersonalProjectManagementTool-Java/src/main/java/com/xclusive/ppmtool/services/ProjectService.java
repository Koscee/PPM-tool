package com.xclusive.ppmtool.services;

import com.xclusive.ppmtool.domain.Backlog;
import com.xclusive.ppmtool.domain.Project;
import com.xclusive.ppmtool.exceptions.ProjectIdException;
import com.xclusive.ppmtool.repositories.BacklogRepository;
import com.xclusive.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    // helper function: converts a string to upper case
    public String changeStringCase (String s){
        return s.toUpperCase();
    }

    public Project saveOrUpdateProject(Project project){
        project.setProjectIdentifier(this.changeStringCase(project.getProjectIdentifier()));

        try {
            /* only create a new backlog when saving new project.
             * backlog shouldn't be created when updating a project
             */
            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier());
            }

            if (project.getId() != null){
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier()));
            }

            return projectRepository.save(project);
        }catch (Exception e) {
            throw new ProjectIdException("Project ID '"+ project.getProjectIdentifier() +"' already exist");
        }
    }

    public Project findProjectByIdentifier(String projectId) {
        projectId = this.changeStringCase(projectId);

        Project project = projectRepository.findByProjectIdentifier(projectId);

        if (project == null) {
            throw new ProjectIdException("Project ID '"+ projectId +"' does not exist");
        }

        return project;
    }

    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId) {
        projectId = this.changeStringCase(projectId);

        Project project = projectRepository.findByProjectIdentifier(projectId);

        if (project == null) {
            throw new ProjectIdException("Cannot delete Project with ID '" + projectId + "'. This project does not exist");
        }

        projectRepository.delete(project);
    }
}
