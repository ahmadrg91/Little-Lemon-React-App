import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Bookingform from './Components/Bookingform';

test("The 'Ocassions' label is present", () => {
  render(<Bookingform availableTimes={['17:00','18:00']} occasions={['Birthday']} handleSubmit={()=> console.log('chill')}/>);
  const text = screen.getByText("Occasion");
  expect(text).toBeInTheDocument();
});

test('The input Element for number of Guests is rendered Porperly', ()=>{
  render(<Bookingform availableTimes={['17:00','18:00']} occasions={['Birthday']} handleSubmit={()=> console.log('chill')}/>);
  const inputElement = screen.getByPlaceholderText('Please enter the number of guests');
  expect(inputElement).toBeInTheDocument();
});

test('The Guests field Client Side validation Working', async ()=>{
  render(<Bookingform availableTimes={['17:00','18:00']} occasions={['Birthday']} handleSubmit={()=> console.log('chill')}/>);
  const inputElement = screen.getByPlaceholderText('Please enter the number of guests');
  const submitButton = screen.getByText('Make Your reservation')

  fireEvent.change(inputElement, {target : {value: 10}});
  expect(inputElement).toHaveValue(10);

  fireEvent.change(inputElement, {target : {value: 20}});
  await waitFor(()=>{
    expect(submitButton).toBeDisabled();
  })
});