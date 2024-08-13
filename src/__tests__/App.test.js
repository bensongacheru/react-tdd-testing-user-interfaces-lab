import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test('renders an image with alt text "A portrait of me"', () => {
    // Arrange
    render(<App />);
    
    // Act
    const image = screen.getByAltText('A portrait of me');
    
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/path/to/image.jpg'); // Replace with actual path
  });
  test('displays a second-level heading with the text `About Me`', () => {
    // Arrange
    render(<App />);
    
    // Act
    const aboutMeHeading = screen.getByRole('heading', {
      name: /about me/i,
      level: 2
    });
    
    // Assert
    expect(aboutMeHeading).toBeInTheDocument();
  });
  test('displays a paragraph with my biography', () => {
    // Arrange
    render(<App />);
    
    // Act
    const biographyParagraph = screen.getByText(/I am a software developer with a passion for learning and building new things./i);
    
    // Assert
    expect(biographyParagraph).toBeInTheDocument();
  });
  test('renders a link to GitHub with correct href', () => {
    // Arrange
    render(<App />);
    
    // Act
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername'); // Replace with actual URL
  });
  
  test('renders a link to LinkedIn with correct href', () => {
    // Arrange
    render(<App />);
    
    // Act
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername'); // Replace with actual URL
  });
  // Your tests here
