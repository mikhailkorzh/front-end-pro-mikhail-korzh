const object = {
    a: 5,
    b: {g: 8, y: 9, t: {q: 48}},
    x: 47,

    exec() {  //verification that function has been cloned properly
        console.log('function was copied successfully');
    }
};

const deepObjectClone = obj => {
    if (obj === null) {
        return null;
    }

    let objectClone = Object.assign({}, obj);

    Object.keys(objectClone).forEach(el => {
        (objectClone[el] = typeof obj[el] === 'object' ? deepObjectClone(obj[el]) : obj[el]);
    });

    return objectClone;
}

const objectClone = deepObjectClone(object);

object.b.t.q = 100;

console.log(object);
console.log(objectClone);
objectClone.exec();