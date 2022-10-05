var array = [6, 2, 3, 1, 7, 4, 8, 5]

array = SortArray();
DrawArray();

function SortArray() {
    for (let i = 1; i < array.length; i++) {
        let tmp = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[j-1])
            {
                tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
 
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}