package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String description;
  private String dueDate;
  private String priority;
  private Integer pomodoro;
  private String status;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

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

  public Integer getPomodoro() {
    return pomodoro;
  }

  public void setPomodoro(Integer pomodoro) {
    this.pomodoro = pomodoro;
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
        + ", pomodoro='"
        + pomodoro
        + '\''
        + ", status='"
        + status
        + '\''
        + '}';
  }
}
