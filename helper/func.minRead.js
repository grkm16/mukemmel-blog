export default (txt,MaxWord = 300,minutes = 1) => (Math.ceil(txt.split(' ').length / MaxWord) * minutes ) + " dk okuma süresi";