import { render, screen } from '@testing-library/react'
import Home from '@/app/page'


    describe('Home', () => {
        it('should have Docs text', () => {
            render(<Home />) 
    
            const myElem = screen.getByText('Docs')  
    
            expect(myElem).toBeInTheDocument() 
        })
        it('should contain the text "information"', () => {
            render(<Home />)  
    
            const myElem = screen.getByText(/information/i) // ACT 
    
            expect(myElem).toBeInTheDocument() 
        })
        it('should have a heading', () => {
            render(<Home />) 
    
            const myElem = screen.getByRole('heading', {
                name: 'Learn'
            }) 
    
            expect(myElem).toBeInTheDocument() 
        })

        it('should have a heading', () => {
            render(<Home />) 
    
            const myElem = screen.getByRole('heading', {
                name: 'WILLIAMS'
            })  
    
            expect(myElem).toBeInTheDocument() 
        })

    })