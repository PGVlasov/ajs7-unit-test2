import heroHealthLevel from '../app';

test('healthy', () => {
    const hero = {
      name: 'Маг',
      health: 52,
    };
  
    expect(heroHealthLevel(hero)).toBe('healthy');
  });

  test('wounded', () => {
    const hero = {
      name: 'Маг',
      health: 48,
    };
  
    expect(heroHealthLevel(hero)).toBe('wounded');
  });

  test('critical', () => {
    const hero = {
      name: 'Маг',
      health: 5,
    };
  
    expect(heroHealthLevel(hero)).toBe('critical');
  });