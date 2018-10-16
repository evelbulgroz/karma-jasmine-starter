describe('MyClass', () => {
	it('has a name', ()=> {
		// Arrange
			const instance = new MyClass();

		// Act
		const name = instance.name;

		// Assert
		expect(typeof name).toBe('function');
	});

	it('has as default name "Instance of MyClass"', ()=> {
		// Arrange
			const instance = new MyClass();

		// Act
		const name = instance.name();

		// Assert
		expect(name).toBe('Instance of MyClass');
	});

})