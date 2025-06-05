# How to Add or Change Images for the Website

This folder contains all the images used on the website. Follow these simple steps to update any photo (toppers, faculty, gallery, logo, etc.).

## 📸 What Images Do You Need?

| Section         | File Name(s)                                 | What is it for?                  |
|----------------|----------------------------------------------|----------------------------------|
| Hero Student   | `student-photo.png`                          | Main student photo on homepage   |
| Gallery        | `gallery-1.jpg`, `gallery-2.jpg`, ...        | Images in the Gallery section    |
| Logo           | `logo.png`                                   | Website/app logo                 |
| Favicon        | `favicon.png`                                | Small icon in browser tab        |
| Toppers        | `topper1.png`, `topper2.png`, `topper3.png`, `topper4.png` | 4 topper photos in Toppers section |
| Faculty        | `faculty1.png`, `faculty2.png`, `faculty3.png`, `faculty4.png` | 4 faculty photos in Faculty section |

## 📝 How to Add or Change an Image

1. **Find the image you want to change (see table above for the file name).**
2. **Replace the old image with your new image.**
   - Make sure your new image has the **same file name** as in the table.
   - Example: To change the first topper photo, replace `topper1.png` with your new photo and keep the name `topper1.png`.
3. **Put your new image in this folder.**
   - This is the `public/images` folder of your project.
4. **Refresh the website.**
   - Your new image will show up automatically!

## 📏 Image Size & Format Tips
- **Gallery images:** Landscape, 1200x800px, JPG or PNG, under 500KB
- **Student photo (hero):** Square, 800x800px, JPG or PNG
- **Logo:** PNG with transparent background is best
- **Favicon:** 512x512px PNG
- **Toppers & Faculty:** Square, 400x400px, JPG or PNG, named as shown above

## 💡 Notes
- You do **not** need to change any code if you use the same file names.
- If you want to add more images or change file names, you may need to update the code in `src/images.ts` or the relevant component.
- Keep all images in this folder for easy management.

If you have any questions, ask your developer or team lead! 