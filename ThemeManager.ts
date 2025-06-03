export type Theme = 'light' | 'dark';
type Observer = (theme: Theme) => void;

class ThemeManager {
  private static instance: ThemeManager;
  private theme: Theme = 'light';
  private observers: Observer[] = [];

  private constructor() {} // Impede criação externa

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public getTheme(): Theme {
    return this.theme;
  }

  public toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.notifyObservers();
  }

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(cb => cb !== observer);
  }

  private notifyObservers(): void {
    this.observers.forEach(cb => cb(this.theme));
  }
}

// Exporta uma única instância (Singleton)
export const themeManager = ThemeManager.getInstance();

