class Questions{
    constructor(title, responses){
        this.title = title;
        this.responses = responses
        this.alternatives = []

    }

    createAlternatives() {
    const options = ['a', 'b', 'c', 'd', 'e']
    let index = 0;
    this.responses.forEach(res => {
            obj = {option: options[index], response: res}
            this.alternatives.push(obj)
            index+=1;
        });

        return this.alternatives;
    }
}