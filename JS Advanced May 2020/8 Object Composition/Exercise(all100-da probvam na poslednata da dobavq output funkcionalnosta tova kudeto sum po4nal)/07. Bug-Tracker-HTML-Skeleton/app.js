function solve() {
    return {
        arrayReports: [],
        report(author, description, reproducible, severity) {
            let currentID;
            if (this.arrayReports.length === 0) {
                currentID = 0;
            } else {
                currentID = this.arrayReports[this.arrayReports.length - 1].id + 1;
            }

            let obj = {
                id: currentID,
                author,
                description,
                reproducible,
                severity,
                status: "Open",
            };
            obj.html = `<div id="report_${obj.id}" class="report">
            <div class="body">
              <p>${obj.description}</p>
            </div>
            <div class="title">
              <span class="author">Submitted by: ${obj.author}</span>
              <span class="status">${obj.status} | ${obj.severity}</span>
            </div>
            </div>`;
            console.log(obj);
            this.arrayReports.push(obj);

            this.outputElement.innerHTML += obj.html;
        },
        setStatus(id, newStatus) {
            let oldObj = this.arrayReports.filter(object => object.id === id)[0];

            this.outputElement.innerHTML = this.outputElement.innerHTML.replace(oldObj.html, oldObj.html.replace(/<span class="status">[A-Za-z]+ \|/, `<span class="status">${newStatus} |`));

            oldObj.status = newStatus;
        },
        remove(id) {
            let oldObj = this.arrayReports.filter(object => object.id === id)[0];

            let elementToRemove = this.outputElement.querySelector(`div #report_${oldObj.id}`);

            this.outputElement.removeChild(elementToRemove);

            this.arrayReports = this.arrayReports.filter(object => object.id !== id);
        },
        sort(method) {
            let allDivs = Array.from(document.querySelectorAll("div.report"));
            let divs = allDivs.filter(div => div.outerHTML.match(/<div id="report_[0-9]+/) != null);

            divs.forEach(oldDiv => this.outputElement.removeChild(oldDiv));

            if (method === 'author') {
                this.arrayReports.sort((a, b) => a.author.localeCompare(b.author));
            } else if (method === 'severity') {
                this.arrayReports.sort((a, b) => a.severity - b.severity);
            } else if (method === 'ID') {
                this.arrayReports.sort((a, b) => a.id - b.id);
            }

            this.arrayReports.forEach(report => this.outputElement.innerHTML += report.html);
        },
        output(selector) {
            let oldOutputElement = this.outputElement;

            this.outputElement = document.querySelector(selector);
            /*if (oldOutputElement) {
                this.arrayReports.forEach(report => {
                    let elementToRemove = this.outputElement.querySelector(`div #report_${oldObj.id}`);

                    report.html;
                });
                oldOutputElement.innerHTML = '';
                this.outputElement
            }*/
        },
    };
}

let tracker = solve();
tracker.output('#content');
tracker.report('kiwi', 'judge rip', true, 10);
tracker.report('bawwi', 'judge rip', true, 5);
tracker.report('awi', 'judge rip', true, 0);
tracker.setStatus(0, 'Closed');
tracker.output('#content');
tracker.remove(0);
tracker.sort("id");