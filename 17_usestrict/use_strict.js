// Javascript "Use strict"
// 'use strict';

{
    // myvariable = 9;
    // console.log(myvariable);
}

// Strict Mode in variable 
// In strict Mode , using a variable without decalring it throws error.

{
    // console.log("Some code");

    // x = 21;
    // console.log(x);

}


{

    // function hello()
    // {
        // 'use strict';

        // String = 'hello';
        // console.log(String);

        // this string give code will not cause an error if there is not 'use strict';
        // string = 'hello';
        // console.log(string);

        // string = 'hello';
        // console.log(string);
    // }
    // hello();
}

// things not allowed in strict mode
// 1. Undeclare variable is not allowed
{
    // 'use strict';

    // a = 'hello'; //throw an error
}

// 3. Undeclare object is not allowed
{
    // 'use strict';

    // person = {name: 'carla',age :25} // throw an error
}

// 4. Duplicating a parameter is not allowed

{
    // It is also common in only funcation also
    // "use strict";

    // function hello(p1 , p1){
    //     console.log('hello');
    // }
    // hello();
}

// 5. Assign to non-writable property is not allowed

{
    // 'use strict';

    // let obj1 = {};

    // console.log(Object.defineProperty(obj1 , 'x' , {value :42 , writable : false}))

    // Assign to non- writable property
    // console.log(Object.x = 9) //throw an error 
}

// 6. Assign to a getter-only property not allowed.

{
    // 'use strict';

    // let obj2 = { get x() { return 17;}};

    //  obj2.x = 20;

    // console.log(obj2);

}

