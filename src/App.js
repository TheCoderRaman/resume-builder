import Web from './Router/Web';
import ThemeProvider from './Providers/ThemeProvider';

const App = () => {
  return (
    <div 
      style={{ minWidth: "220px" }}
      className="app-resume-builder" 
    >
      <ThemeProvider>
        <Web />
      </ThemeProvider>
    </div>
  );
};

export default App;
