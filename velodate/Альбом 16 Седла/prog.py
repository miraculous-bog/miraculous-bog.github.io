import os
import shutil
from os import path
 
# def main():
#  # создаем дубликат существующего файла
#     if path.exists("file.txt"):
#  # получаем путь к файлу в текущем каталоге
#         src = path.realpath("file.txt");
 
#  # переименум исходный файл
#         os.rename('file.txt','career.guru99.txt') 
 
# if __name__ == "__main__":
#     main()


counter = 1
for file in os.listdir():
    src = file
    dst='fender'+str(counter)+".png"
    os.rename(src,dst)
    counter+=1