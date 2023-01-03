import {
  // AfterViewInit,
  Component,
  // ElementRef,
  OnInit,
  // QueryList,
  // ViewChild,
  // ViewChildren,
} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

// import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
// import { CourseCardComponent } from "./course-card/course-card.component";
// import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }
}
