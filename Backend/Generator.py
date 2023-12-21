import sys
import cv2

# Fetch the names from firebase and store it in list_names
# Change these lines according to your need
list_names = []

# Get the argument passed from JavaScript
data_to_pass_in = sys.argv[1]

# Add the passed data to list_names
list_names.append(data_to_pass_in)

for index, name in enumerate(list_names):
    template = cv2.imread("Insurance Template.png")
    # Get the size of the text
    (text_width, text_height) = cv2.getTextSize(name, 1, 6, 5)[0]

    # Calculate the center position of the text
    x = (template.shape[1] - text_width) // 2
    y = 760 # y-coordinate is fixed

    # Draw the text
    cv2.putText(template, name, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 3, (62, 108, 118), 10, cv2.LINE_AA)
    cv2.putText(template, name, (100, 282), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (65, 75, 59), 2, cv2.LINE_AA)
    cv2.putText(template, name, (471, 366), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (65, 75, 59), 2, cv2.LINE_AA)

    cv2.imwrite("./Certificates/" + name + ".jpg", template)
    print('Processing Certificate for:', name)


