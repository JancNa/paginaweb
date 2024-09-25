document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById('switcher');
    const splineLight = document.getElementById('spline-light');
    const splineDark = document.getElementById('spline-dark');
    const maskLight = document.getElementById('mask-light');
    const maskDark = document.getElementById('mask-dark');
    const logoLight = document.getElementById('logo-light');
    const logoDark = document.getElementById('logo-dark');
    const habilidadesDark = document.getElementById('habilidades-dark');
    const habilidadesLight = document.getElementById('habilidades-light'); 

    // Verifica el estado guardado en localStorage
    const theme = localStorage.getItem('theme');
    console.log('Tema guardado en localStorage:', theme);

    // Función para aplicar el tema
    const applyTheme = (isDark) => {
        document.documentElement.classList.toggle('theme-dark', isDark); // Cambia en :root

        if (switcher) {
            switcher.checked = isDark; // Marca el switch si el tema es oscuro
        }

        if (splineDark && splineLight) {
            splineDark.style.display = isDark ? 'block' : 'none'; // Muestra/Oculta el Spline oscuro
            splineLight.style.display = isDark ? 'none' : 'block'; // Muestra/Oculta el Spline claro
        }

        if (maskDark && maskLight) {
            maskDark.style.display = isDark ? 'block' : 'none';  // Muestra/Oculta imagen oscura
            maskLight.style.display = isDark ? 'none' : 'block';  // Muestra/Oculta imagen clara
        }

        if (logoDark && logoLight) {
            logoDark.style.display = isDark ? 'block' : 'none'; // Muestra/Oculta logo oscuro
            logoLight.style.display = isDark ? 'none' : 'block'; // Muestra/Oculta logo claro
        }
        if (habilidadesDark && habilidadesLight) {
            habilidadesDark.style.display = isDark ? 'block' : 'none'; // Muestra la imagen oscura
            habilidadesLight.style.display = isDark ? 'none' : 'block'; // Muestra la imagen clara
        }
    };

    // Aplica el tema guardado en localStorage
    if (theme === 'dark') {
        applyTheme(true);
        console.log('Tema aplicado: oscuro');
    } else {
        applyTheme(false);
        console.log('Tema aplicado: claro');
    }

    // Maneja el cambio de tema
    if (switcher) {
        switcher.addEventListener('change', () => {
            const isDark = switcher.checked;
            applyTheme(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            console.log(`Tema cambiado a ${isDark ? 'oscuro' : 'claro'}`);
        });
    } else {
        console.error('El switch de tema no se encontró.');
    }
});
