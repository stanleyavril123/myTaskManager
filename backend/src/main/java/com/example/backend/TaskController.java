package com.example.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

  private final List<Task> tasks = new ArrayList<>();
  private final ObjectMapper objectMapper = new ObjectMapper(); // to convert java obj to jason
  private final String filePath = "tasks.json";

  public TaskController() {
    try {
      File file = new File(filePath);
      if (file.exists()) {
        Task[] loadedTasks = objectMapper.readValue(file, Task[].class);
        tasks.addAll(List.of(loadedTasks));
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  private void saveTaskToFile() {
    try {
      objectMapper.writeValue(new File(filePath), tasks);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  @PostMapping
  public String createTask(@RequestBody Task task) {
    tasks.add(task);
    saveTaskToFile();
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
