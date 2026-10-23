import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosTable } from './usuarios-table';

describe('UsuariosTable', () => {
  let component: UsuariosTable;
  let fixture: ComponentFixture<UsuariosTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosTable],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
