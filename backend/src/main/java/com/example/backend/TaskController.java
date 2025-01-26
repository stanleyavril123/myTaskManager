package com.example.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

  @PostMapping
  public String createTask(@RequestBody Task task) {
    System.out.println("Recived Tak: " + task);
    return "Task recived successfully";
  }
}

class Task {
  private String title;
  private String description;
  private String dueDate;
  private String priority;
  private String status;

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDueDate() {
    return dueDate;
  }

  public void setDueDate(String dueDate) {
    this.dueDate = dueDate;
  }

  public String getPriority() {
    return priority;
  }

  public void setPriority(String priority) {
    this.priority = priority;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  @Override
  public String toString() {
    return "Task{"
        + "title='"
        + title
        + '\''
        + ", description='"
        + description
        + '\''
        + ", dueDate='"
        + dueDate
        + '\''
        + ", priority='"
        + priority
        + '\''
        + ", status='"
        + status
        + '\''
        + '}';
  }
}
