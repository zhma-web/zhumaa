import os
from PIL import Image

# Folder input (tempat lu naro foto gede) & output (hasilnya)
input_folder = "raw_photos"
output_folder = "images"

# Bikin folder output kalau belum ada
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Max width (dalam pixel)
max_width = 1200

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        img_path = os.path.join(input_folder, filename)
        
        with Image.open(img_path) as img:
            # Hitung ratio biar gak gepeng
            width_percent = (max_width / float(img.size[0]))
            hsize = int((float(img.size[1]) * float(width_percent)))
            img = img.resize((max_width, hsize), Image.Resampling.LANCZOS)
            
            # Save jadi webp
            new_filename = os.path.splitext(filename)[0] + ".webp"
            img.save(os.path.join(output_folder, new_filename), "WEBP", quality=85)
            print(f"Berhasil optimasi: {new_filename}")

print("--- Semua gambar siap upload! ---")
