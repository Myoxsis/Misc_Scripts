import platform, os
from win10toast import ToastNotifier

def push(title, message):
	plt = platform.system()

	if plt=='Darwin':
		command = f'''
		osascript -e 'display notification "{message}" with title "{title}"'
		'''
	if plt=='Linux':
		command = f'''
		notify-send "{title}" "{message}"
		'''
	if plt=='Windows':
		toaster = ToastNotifier()
		toaster.show_toast(title, message)
	else:
		return

	os.system(command)

push("Jira Gatherer", "All tickets cleared")
