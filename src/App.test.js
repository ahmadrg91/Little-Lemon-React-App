import { fireEvent, render, screen } from '@testing-library/react';
import Bookingform from './Components/Bookingform';

test('Renders the button text of reservation', () => {
  render(<Bookingform availableTimes={['17:00','18:00']} occasions={['Birthday']} handleSubmit={()=> console.log('chill')}/>);
  const text = screen.getByText("Occasion");
  expect(text).toBeInTheDocument();
});

test('Testing input number of guests field', ()=>{
  render(<Bookingform availableTimes={['17:00','18:00']} occasions={['Birthday']} handleSubmit={()=> console.log('chill')}/>);
  const inputElement = screen.getByPlaceholderText('Please enter the number of guests');
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, {target : {value: 10}});
  expect(inputElement).toHaveValue(10);
});
