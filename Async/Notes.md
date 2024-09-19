JavaScript is synchronous and single threaded. 
Synchronous means one code will execute at a time. Exceptions do come when we add something, but by default it is synchronous only in nature and while always be
Single threded means everything executes on one thread only, this means it is slow comparitive to other multi threaded languages, but javascript never lets you feel that it is single threaded as it delegates the calls and does the work. But the fact to remember here is that you will never get a javascript engine alone somewhere, but you will get it with some runtime envirnment like browser, nodejs 
All the above facts are about default javascript only 

Execution Context: executes one line of code at a time, each operation waits for the last one to complete before executing. Call Stack and Memory Heap is there in execution context as well

Blocking Code vs Non-Blocking Code : yeh hi synchronous and asynchronous hai

Blocking Code: Blocks the flow of the program. Suppose i tell you to wait till I come after sometime, so during that waiting time you can't perform any activity and wait for me, when i come back then only you will continue your work. this is blocking code. 

Non-Blocking Code: Does not blocks execution of the program. Like said in the above example, it will not wait till I come after sometime, it will execute the program in the mean time I am gone

One of the major problems occurs when you have to read some content from the file . in this case the file will not be able to read my program, instead i will take the help of kernel. The context of the file is given to the kernel, then the kernel goes and accesses the file and retrieve whatever material is needed fromt the file, after reading the execution(thread) is again given to the program. 
Now this kernel does not waits for us , it will tell us to wait as it has many more files to read
This is how file is read asynchronously

but if i read my file synchronously, it will tell us that you can do your other work, when i will get the material i will notify you

Now, some people will say non-blocking is the best way, here is where most people make mistake. let's take an example and get to know this in a better way

suppose i want to print a message as soon as all the information given by the user is successfully stored in the database

in case of sync:
as soon as the user will store the data, the data will be stored in the database and this process will take time, but as it is syncronous it will continue the program and print the message even before the data being stored in the database and us getting a notification that the data is successfully stored in the database

in case of async:
here the importance of async is clearly visible as it will print the next lines of code(message) after we receive the notification that the data is successfull stored in the database

there is never nice or bad, there are use-case. like in above example blocking code is better

task queue is something that makes js so fats and asynchronous
there is also something called high priority queue or promise queue

when ever some program is executed in javascript, 
in call stack-> glocabal execution code is stored, along with functions is loaded one by one


