import {
  // AfterViewInit,
  Component,
  Inject,
  InjectionToken,
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

// // unique "nickname" for service dependency - Injection Token
// // unique identifier for dependency, every dependency has its own identifier/InjectionToken
// export const COURSES_SERVICE = new InjectionToken<CoursesService>(
//   "COURSES_SERVICE"
// );

// // custom provider for coursesService
// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    // // pass configuration object rather then provider function itself
    // // configuration object contains injection token, provider function and dependencies (of the dependency) array
    // {
    //   provide: COURSES_SERVICE, // Injection Token
    //   useFactory: coursesServiceProvider, // provider function
    //   deps: [HttpClient], // dependency array
    // },
    //
    // Angular way:
    // 1. use class name as an injection token (not an interface - interface doesn't exist on runtime, compile time contract only)
    //  - no need for @Inject() decorator
    // 2. use class constructor as provider function
    // 3. dependencies called automatically based on the class constructor
    // {
    //   provide: CoursesService,
    //   useClass: CoursesService,
    // },
    // or further simplified:
    CoursesService,
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course): void {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course saved!"));
  }
}
