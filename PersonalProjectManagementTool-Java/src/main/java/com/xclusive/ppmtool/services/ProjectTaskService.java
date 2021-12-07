package com.xclusive.ppmtool.services;

import com.xclusive.ppmtool.domain.Backlog;
import com.xclusive.ppmtool.domain.ProjectTask;
import com.xclusive.ppmtool.enums.Priority;
import com.xclusive.ppmtool.enums.Status;
import com.xclusive.ppmtool.exceptions.ProjectNotFoundException;
import com.xclusive.ppmtool.repositories.BacklogRepository;
import com.xclusive.ppmtool.repositories.ProjectRepository;
import com.xclusive.ppmtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        // handle Exceptions: Project not found
        try {
            // Add PTs to a specific project,
            //  i.e check project != null and backlog exists
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

            // set the backlog to projectTask
            projectTask.setBacklog(backlog);

            // projectSequence is the projectIdentifier + PTSequence (position of the task within the backlog)
            // (eg: IDET-1, IDASF-2)
            Integer BacklogSequence = backlog.getPTSequence();

            // increase PTSequence only when new projectTask is added and
            // update and set the PTSequence (which is within the backlog)
            BacklogSequence++;

            backlog.setPTSequence(BacklogSequence);

            // Add Sequence to Project Task
            String projectSequence = projectIdentifier+"-"+BacklogSequence;
            projectTask.setProjectSequence(projectSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            // set an INITIAL priority when priority is null
            if (projectTask.getPriority() == null) {  // need this check "projectTask.getPriority() == 0" to handle form data in the future
                projectTask.setPriority(Priority.LOW.getValue());
            }

            // set an INITIAL status when status is null
            if ("".equals(projectTask.getStatus()) || projectTask.getStatus() == null) {
                projectTask.setStatus(Status.TODO.getAction());
            }

            return projectTaskRepository.save(projectTask);

        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not found");
        }

    }

    public Iterable<ProjectTask> findBacklogBypId(String id) {

        if (projectRepository.findByProjectIdentifier(id) == null) {
            throw new ProjectNotFoundException("Project with ID: '"+id+"' does not exist");
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    
}
