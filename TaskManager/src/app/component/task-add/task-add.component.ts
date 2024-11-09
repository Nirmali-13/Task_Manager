import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task.service';
import { User, UserService } from '../../user.service';
@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  taskForm: FormGroup;
  users: User[] = [];
checkLists: any;
  
  constructor(private fb: FormBuilder, private taskService: TaskService, private userService: UserService, private router: Router,) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['High'],
      assigneeId: [''],
      checkLists:this.fb.array([])
    });
  }
//checklist
get myCheckLists(): FormArray{
  return this.taskForm.get('checkLists') as FormArray
}

addcheckLists(){
  this.myCheckLists.push(this.fb.group({
    name:[''],
    isdone:[false]
  }));
}

removeCheckList(index:number){
this.myCheckLists.removeAt(index);
}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  onSubmit() {
    let task = this.taskForm.value;
    this.taskService.createTasks(task).subscribe(data => {

      this.router.navigate(['/'])
    });

  }
  onCancel() {
    this.router.navigate(['/'])
  };
}
// let task =this.taskForm.value

