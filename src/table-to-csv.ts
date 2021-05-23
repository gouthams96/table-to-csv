import { defaultConfig } from "./config";
import { DefaultConfig } from "./interfaces";
export class TableToCSV {
  private options: DefaultConfig;
  private table: HTMLTableElement;
  private tableTitles: Array<string> = [];
  private csvRecord: Array<string> = [];
  constructor(tableId: string, options: object = {}) {
    this.options = {
      ...defaultConfig,
      ...options,
    };
    this.table = this.getTableElement(tableId);
    this.init();
  }

  getTableElement(tableId: string): HTMLTableElement {
    return document.querySelector(tableId);
  }

  init(): void {
    this.tableTitles = this.findTableTitles(this.table.tHead);
    this.csvRecord = this.generateCSVData(this.table.tBodies);
  }

  findTableTitles(heads: HTMLTableSectionElement): string[] {
    const thead: HTMLTableRowElement = heads.rows.item(0);
    const cells: HTMLCollectionOf<HTMLTableHeaderCellElement> = thead.cells;
    const titles: Array<string> = [];
    for (let i = 0; i < cells.length; i++) {
      if (this.options.ignoreColumns.includes(i)) continue;
      titles.push(cells.item(i).textContent);
    }
    return titles;
  }

  generateCSVData(tbody: HTMLCollectionOf<HTMLTableSectionElement>): string[] {
    const rows: HTMLCollectionOf<HTMLTableRowElement> = tbody.item(0).rows;
    const csvRecord: Array<string> = [];
    for (let i = 0; i < rows.length; i++) {
      const tr: HTMLCollectionOf<HTMLTableDataCellElement> = rows.item(i).cells;
      const csvRow: Array<string> = [];
      for (let j = 0; j < tr.length; j++) {
        if (this.options.ignoreColumns.includes(j)) continue;
        csvRow.push(tr.item(j).textContent);
      }
      csvRecord.push(csvRow.join(this.options.delimiter));
    }
    return csvRecord;
  }

  download(): void {
    const data = [
      this.tableTitles.join(this.options.delimiter),
      ...this.csvRecord,
    ].join("\n");
    const csvFile = new Blob([data], { type: "text/csv" });
    let link = document.createElement("a");
    link.download = this.options.filename;
    link.href = window.URL.createObjectURL(csvFile);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(link.href);
  }
}
