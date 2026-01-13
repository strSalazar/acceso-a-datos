import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksApiService } from '../../services/tasks-api.service';

@Component({
  selector: 'app-task-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-new.component.html',
  styleUrl: './task-new.component.css',
})
export class TaskNewComponent {

form: any;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: [''],
      completada: [false],
    }); }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newTask = this.form.getRawValue() as any;

    this.tasksService.create(newTask).subscribe({
      next: () => {
        this.router.navigateByUrl('/tareas');
      },
      error: (err) => {
        console.error('Error al crear tarea', err);
      }
    });
  }

  cancel() {
    this.router.navigateByUrl('/tareas');
  }
}
