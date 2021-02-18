import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post('http://localhost:3000/api/registration' , data) 
  }
  login(data){
    return this.http.post('http://localhost:3000/api/login' , data) 
  }
  login_admin(data){
    return this.http.post('http://localhost:3000/api/admin/login' , data) 
  }
  checkExistance(data){
    return this.http.post('http://localhost:3000/api/checkExistance' , data) 
  }

  // getAllUsers(){
  //   return this.http.get('http://localhost:3000/api/getAllUsers')
  // }

//   getUsersByEmail_id(data){
//   return this.http.post('http://localhost:3000/api/getUserByEmail_id' , data)
// }
add_school(data){
  return this.http.post('http://localhost:3000/api/addSchool' , data)
}
getAllSchool(){
  return this.http.get('http://localhost:3000/api/getSchool' )
}
add_class(data){
  return this.http.post('http://localhost:3000/api/addClass' , data)
}
getClass(){
  return this.http.get('http://localhost:3000/api/getClass' )
}
add_university(data){
  return this.http.post('http://localhost:3000/api/addUniversity' , data)
}
getUniversity(){
  return this.http.get('http://localhost:3000/api/getUniversity' )
}
delete_school(data){
  return this.http.post('http://localhost:3000/api/deleteSchool' , data)
}
update_school(data){
  return this.http.post('http://localhost:3000/api/updateSchool' , data)
}
}

