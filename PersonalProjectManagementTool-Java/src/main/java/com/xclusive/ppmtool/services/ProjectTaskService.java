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

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {

        // Add PTs to a specific project,
        //  i.e check project != null and backlog exists
        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();

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
        // need this check "projectTask.getPriority() == 0" to handle form input selected priority
        if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
            projectTask.setPriority(Priority.LOW.getValue());
        }

        // set an INITIAL status when status is null
        if ("".equals(projectTask.getStatus()) || projectTask.getStatus() == null) {
            projectTask.setStatus(Status.TODO.getAction());
        }

        return projectTaskRepository.save(projectTask);

    }

    public Iterable<ProjectTask> findBacklogBypId(String id, String username) {

        projectService.findProjectByIdentifier(id, username);
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id, String username) {
        // make sure we are searching on the right backlog
        projectService.findProjectByIdentifier(backlog_id, username);

        // make sure that our task exists
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if (projectTask == null) {
            throw new ProjectNotFoundException("Project Task '"+pt_id+"' not found");
        }

        // make sure that the backlog/project id in the path corresponds to the right project
        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Project Task '"+pt_id+"' does not exist in project '"+backlog_id+"'");
        }

        return projectTask;
    }

    public ProjectTask updatePTByProjectSequence(ProjectTask updatedTask, String backlog_id, String pt_id, String username) {
        // find existing project task
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);
        
        // calls the mapUser function and update specific fields
        mapProjectTask(updatedTask, projectTask);

        // save update
        return projectTaskRepository.save(projectTask);
    }

    public void deletePTByProjectSequence(String backlog_id, String pt_id, String username) {
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);

        projectTaskRepository.delete(projectTask);
    }

    protected void mapProjectTask(ProjectTask updateObject, ProjectTask dbObject){
        dbObject.setSummary(updateObject.getSummary());
        dbObject.setStatus(updateObject.getStatus());
        dbObject.setAcceptanceCriteria(updateObject.getAcceptanceCriteria());
        dbObject.setPriority(updateObject.getPriority());
        dbObject.setDueDate(updateObject.getDueDate());
        dbObject.setUpdated_At(updateObject.getUpdated_At());
    }
    
}
