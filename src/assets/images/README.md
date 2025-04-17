# Images Directory

This directory is for storing project images. Supported formats:
- .jpg / .jpeg
- .png
- .svg
- .webp
- .gif

## Usage Guidelines

1. Place your images in this directory
2. Import them in your components like this:
   ```tsx
   import myImage from '../../assets/images/my-image.jpg'
   ```
3. Use them in your components:
   ```tsx
   <img src={myImage} alt="Description" />
   ```

## Best Practices

- Use descriptive filenames (e.g., `hero-background.jpg` instead of `img1.jpg`)
- Optimize images before adding them to reduce bundle size
- Consider using WebP format for better compression
- Keep image dimensions reasonable for their intended use