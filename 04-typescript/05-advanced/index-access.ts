{
  const permissions = {
    r: 0b100 as const,
    w: 0b010 as const,
    x: 0b001 as const,  // PermsNum with `as const` (called as Const Assertions) is number literal type. if const assertions are not, PermsNum is number type.
  };

  const permission2 = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
  } as const;

  type PermsChar = keyof typeof permissions;      // 'r' | 'w' | 'x'
  type PermsNum = typeof permissions[PermsChar];  // (typeof permissions)[PermsChar]
  // 1 | 2 | 4
}