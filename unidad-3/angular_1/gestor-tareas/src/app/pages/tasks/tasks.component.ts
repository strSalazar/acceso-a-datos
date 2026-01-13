import { Component, OnInit } from '@angular/core';
import { TasksApiService } from '../../services/tasks-api.service'; 
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksApiService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.list().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => console.error('Error al cargar tareas', err)
    });
  }

  remove(id: number) {
    this.tasksService.remove(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (err) => console.error('Error al borrar', err)
    });
  }
}
