function doTask1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function doTask2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

function doTask3(callback) {
  setTimeout(() => {
    console.log("Task 3 done");
    callback();
  }, 1000);
}

// Callback Hell:
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("All tasks done");
    });
  });
});
