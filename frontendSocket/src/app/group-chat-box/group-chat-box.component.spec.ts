import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatBoxComponent } from './group-chat-box.component';

describe('GroupChatBoxComponent', () => {
  let component: GroupChatBoxComponent;
  let fixture: ComponentFixture<GroupChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupChatBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
