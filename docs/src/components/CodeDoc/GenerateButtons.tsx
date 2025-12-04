"use client";

import { generateCnpj, generateCpf } from "cpf_and_cnpj-generator";
import { useEffect, useState } from "react";
import { setMask } from "react-input-mask-br";

export function GenerateCpf() {
	const [cpf, setCpf] = useState("00000000000");
	const [isCpfMasked, setIsCpfMasked] = useState(true);

	const isMasked = isCpfMasked ? setMask({ type: "cpf", value: cpf }) : cpf;

	const handleCpfMaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsCpfMasked(event.target.checked);
	};

	useEffect(() => {
		setCpf(generateCpf());
	}, []);
	return (
		<>
			<button
				id="gera-cpf"
				className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				onClick={() => setCpf(generateCpf())}
			>
				Gerar CPF
			</button>
			<p className="mt-2 text-gray-600 dark:text-gray-300">
				CPF: <span id="response-cpf">{isMasked}</span>
			</p>
			<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
				<label htmlFor="cpf">Use mask ?</label>
				<input
					type="checkbox"
					name="cpf"
					id="cpf"
					checked={isCpfMasked}
					onChange={handleCpfMaskChange}
				/>
			</div>
		</>
	);
}

export function GenerateCnpj() {
	const [cnpj, setCnpj] = useState("00000000000000");

	const [isCnpjMasked, setIsCnpjMasked] = useState(true);

	const isMasked = isCnpjMasked ? setMask({ type: "cnpj", value: cnpj }) : cnpj;

	const handleCnpjMaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsCnpjMasked(event.target.checked);
	};

	useEffect(() => {
		setCnpj(generateCnpj());
	}, []);
	return (
		<>
			<button
				id="gera-cnpj"
				className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				onClick={() => setCnpj(generateCnpj())}
			>
				Gerar CNPJ
			</button>
			<p className="mt-2 text-gray-600 dark:text-gray-300">
				CNPJ: <span id="response-cnpj">{isMasked}</span>
			</p>
			<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
				<label htmlFor="cnpj">Use mask ?</label>
				<input
					type="checkbox"
					name="cnpj"
					id="cnpj"
					checked={isCnpjMasked}
					onChange={handleCnpjMaskChange}
				/>
			</div>
		</>
	);
}
