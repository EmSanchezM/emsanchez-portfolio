<script>
  import { onMount } from "svelte";
  import { Bars } from "./icons";

  let isMenuOpen = false;
  let isScrolled = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleScroll() {
    isScrolled = window.scrollY > 40;
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

</script>

<header class:header--scroll={isScrolled} class="header" id="header">
  <div class="container">
    <nav class="nav">
      <a href="#about" class="nav__logo">EmSanchez</a>
      <div class="nav__menu {isMenuOpen ? 'nav__menu--open' : ''}" id="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#work" class="nav__link" on:click={toggleMenu}>Work</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" on:click={toggleMenu}>Contact</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" on:click={toggleMenu}>About</a>
          </li>
        </ul>
      </div>
      <button class="nav__toggle" on:click={toggleMenu}>
        <Bars />
      </button>
    </nav>
  </div>
</header>

<style>
  .header {
    background-color: var(--bg-primary);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: var(--height-header);
    z-index: var(--zindex-menu);
    transition: var(--transition);
  }

  .header--scroll {
    height: var(--height-header--scroll);
    box-shadow: var(--box-shadow);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .nav__logo {
    font-size: var(--fs-lg);
    font-weight: var(--fw-bold);
    color: #004e86;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .nav__list {
    display: flex;
    column-gap: 4rem;
  }

  .nav__link {
    transition: var(--transition);
  }

  .nav__link:hover {
    color: var(--primary-color);
  }

  .nav__toggle {
    display: none;
    font-size: var(--fs-xl);
    color: var(--color-white);
    cursor: pointer;
    transition: var(--transition);
  }

  .nav__toggle:hover {
    color: var(--primary-color);
  }

  @media screen and (max-width: 968px) {
    .nav__list {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 4rem;
    }

    .nav__menu {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--bg-primary);
      display: none;
      justify-content: center;
      transition: var(--transition);
    }

    .nav__menu--open {
      display: flex;
    }

    .nav__toggle {
      display: block;
    }

    .nav__logo,
    .nav__toggle {
      z-index: var(--zindex-fixed);
    }
  }
</style>
