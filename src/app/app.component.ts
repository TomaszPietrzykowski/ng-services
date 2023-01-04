import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from "./config";

import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: CONFIG_TOKEN,
      // useFactory: () => APP_CONFIG,
      // if factory simply returns value, we may use instead:
      useValue: APP_CONFIG,
    },
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(config);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course): void {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course saved!"));
  }
}
