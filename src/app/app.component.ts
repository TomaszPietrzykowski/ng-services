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

// unique "nickname" for service dependency - Injection Token
// unique identifier for dependency, every dependency has its own identifier/InjectionToken
export const COURSES_SERVICE = new InjectionToken<CoursesService>(
  "COURSES_SERVICE"
);

// custom provider for coursesService
function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    // pass configuration object rather then provider function itself
    // configuration object contains injection token, provider function and dependencies (of the dependency) array
    {
      provide: COURSES_SERVICE,
      useFactory: coursesServiceProvider,
      deps: [HttpClient],
    },
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    @Inject(COURSES_SERVICE) private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course): void {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course saved!"));
  }
}
