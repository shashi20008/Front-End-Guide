var printMessage = function print (msg) {
  console.log(msg);
};

var pm = msg => console.log(msg);

pm('Hello world!', '2nd param');
pm('Welcome to front end JS Classes');
pm();
pm();
pm();
pm('End of messages!');
