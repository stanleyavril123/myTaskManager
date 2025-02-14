package com.example.backend.controller;

import com.example.backend.model.Task;
import com.example.backend.repository.TaskRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

  private final TaskRepository taskRepository;
  private final List<Task> tasks = new ArrayList<>();

  public TaskController(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  @GetMapping
  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  @PostMapping
  public Task createTask(@RequestBody Task task) {
    return taskRepository.save(task);
  }
}
