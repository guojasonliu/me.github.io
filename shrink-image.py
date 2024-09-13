import os, argparse, shutil
from PIL import Image
from tqdm import tqdm


def copy_folder(src, dest):
    if not os.path.exists(src):
        print(f'Source folder \'{src}\' does not exist.')
        return

    if os.path.exists(dest):
        print(f'Destination folder \'{dest}\' already exists.')
        return

    try:
        shutil.copytree(src, dest)
    except Exception as e:
        print(f'Error occurred while copying: {e}')


def resize_image(image_path, max_size):
    with Image.open(image_path) as img:
        width, height = img.size
        if width > height:
            new_width = max_size
            new_height = int((max_size / width) * height)
        else:
            new_height = max_size
            new_width = int((max_size / height) * width)
        
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        img.save(image_path, 'JPEG')


def process_images(input_directory, max_size, skip):
    if not os.path.exists(input_directory):
        print(f'{input_directory} does not exist!')
        exit(1)

    jpg_count = sum(1 for file in os.listdir(input_directory) if file.lower().endswith('.jpg'))
    pbar = tqdm(total=jpg_count, desc=f'Shrink images in {input_directory}')
    for filename in os.listdir(input_directory):
        if filename.lower().endswith('.jpg'):
            if filename not in skip:
                image_path = os.path.join(input_directory, filename)
                resize_image(image_path, max_size)
            pbar.update(1)
    pbar.close()


def parse_arguments():
    parser = argparse.ArgumentParser(description='Resize JPG images in a directory so the longest dimension is no more than a specified size.')
    parser.add_argument('path', type=str, help='Path to the directory containing JPG images.')
    parser.add_argument('-m', '--max_size', type=int, default=1404, help='Maximum size for the longest dimension (default is 1404 px).')
    parser.add_argument('-s', '--skip', nargs='+', default=[], help='List of file names to skip.')
    parser.add_argument('-i', '--individual', action='store_true', help='Shrink only one image')
    parser.add_argument('-n', '--no_backup', action='store_true', help='Do not back up the input directory')
    return parser.parse_args()


'''
Example Usage:
python3 shrink-image.py [DIR] -s IMG_1952.jpg IMG_1972.jpg
python3 shrink-image.py [PATH] -i -m 2000
'''
if __name__ == '__main__':
    args = parse_arguments()
    if args.individual:
        resize_image(args.path, args.max_size)
    else:
        if not args.no_backup:
            copy_folder(args.path, f'{args.path}_COPY' if args.path[-1] != '/' else f'{args.path[:-1]}_COPY')
        process_images(args.path, args.max_size, args.skip)
