import platform, os
from win10toast import ToastNotifier

if platform.system() = 'Windows':
  toaster = ToastNotifier()
  toaster.show_toast("Jira Gatherer", "All Jira Tickets have been check")

elif platform.system() = "Mac":
  title = "Success"
  message = "File downloaded"
  command = f'''
  osascript -e 'display notification "{message}" with title "{title}"'
  '''
  os.system(command)
