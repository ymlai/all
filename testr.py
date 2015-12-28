no_of_box=3
dim=(0,50,160,70)

from PIL import Image

test_image = "/home/mong/Desktop/1.jpg"
original = Image.open(test_image)
original.show()

width, height = original.size   # Get dimensions
left = width/5
top = height/5
right = 3 * width/5
bottom = 3 * height/5
#cropped_example = original.crop((left, top, right, bottom))
cropped_example = original.crop(dim)
try:
 cropped_example.show()
 cropped_example.save('new.jpg')
except:
 print 'done'
