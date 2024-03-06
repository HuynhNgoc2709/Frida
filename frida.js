Java.scheduleOnMainThread(function() {
        Toast = Java.use("android.widget.Toast");
        var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
        var context = currentApplication.getApplicationContext();
        Toast.makeText(context,"hello world", Toast.LENGTH_SHORT.value).show();
});