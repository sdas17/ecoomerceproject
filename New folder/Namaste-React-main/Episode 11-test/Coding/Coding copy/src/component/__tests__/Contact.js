import Contact from "../Contact"
import {render, screen}from '@testing-library/react';
import "@testing-library/jest-dom";


describe("conact application test case",()=>{

    it("render Contact application",()=>{
        render(<Contact/>);
        const heading = screen.getByRole('heading');
        //Asserting
        //@testing libary is important file render contact  heading get by role and render 
        //
        expect(heading).toBeInTheDocument();
        
    })
    //wheether we can find button are thier are not ??
    it ('should load button is render component',()=>{
        render(<Contact/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
    ///whether we can see find button in text are thier are not ??
    it ('should button test is render are component are thier are not ',()=>{
        render(<Contact/>);
        const buttonText=screen.getByText('Enter')
        expect(buttonText).toBeInTheDocument();
    
    })
    it("should have button placeholder naem",()=>{
        render(<Contact/>);
        const placeholder = screen.getByPlaceholderText('name');
        expect(placeholder).toBeInTheDocument();
    
    
    })
    it("should have all placeholder name",()=>{
        render(<Contact/>);
        const placeholders = ['name', 'password'];
        placeholders.forEach(placeholder => {
            const inputElement = screen.getByPlaceholderText(placeholder);
            expect(inputElement).toBeInTheDocument();
        });
    })  
    
    it('should have multiple input fields', async () => {
        render(<Contact />);
      
        const inputElements = await screen.findAllByRole('textbox'); 
      
        console.log(inputElements.length);
        expect(inputElements.length).toBe(1); 
      });
      
})