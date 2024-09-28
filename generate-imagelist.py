import os, argparse, pyperclip


def print_image_info(album):
    directory = f'public/assets/albums/{album}/'
    output = []

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
            image_path = f'/assets/albums/{album}/{filename}'
            output.append(f'{{ "img": "{image_path}", "rows": 1, "cols": 6 }},')

    output.sort()
    text = '\n'.join(output)
    pyperclip.copy(text)
    print(text)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Print image data in JSON format')
    parser.add_argument('album', type=str, help='Album name')
    args = parser.parse_args()

    print_image_info(args.album)
