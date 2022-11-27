export const imageUpload = (image) => {

    return new Promise(function (resolve, reject) {
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb_key}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url);
                    resolve(imgData.data.url)
                }
            })

    })

}