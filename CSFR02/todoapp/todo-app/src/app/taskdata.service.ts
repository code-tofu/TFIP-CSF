import { Injectable } from '@angular/core';
import { Section } from './model/section.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Task } from './model/task.model';

const apiURL = "http://localhost:8080/api/todo"

@Injectable({
  providedIn: 'root'
})

export class TaskdataService {

  constructor(private httpClient: HttpClient) { }

  //LOCAL DATASOURCE
  project: Section[] = [];
  respJson$! :Observable<any>;
  respXUrl$! :Observable<any>;
  jsonSub!: Subscription

  upsertTask(sectionId: number, taskId: number, newTask: Task) {
    this.respJson$ = this.posttodoJson(newTask)
    this.jsonSub = this.respJson$.subscribe(resp => console.info(resp))
    this.jsonSub.unsubscribe
  }

    posttodoJson(todo: Task) :Observable<any>{
      console.log("Post Json Called")
      return this.httpClient.post<any>(`${apiURL}/post`, todo)
    }
    posttodoXUrl(todo: Task) :Observable<any>{
      console.log("Post URL Called")
      return this.httpClient.post<any>(`${apiURL}/post`, todo)
    }






}
